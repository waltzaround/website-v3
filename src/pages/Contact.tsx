import { useEffect } from "react";
import Header from "../components/Header";
import "../contact.css";
import Footer from "../components/Footer";
function Contact() {
  useEffect(() => {
    const canvas = document.getElementById("canv") as HTMLCanvasElement;
    const gl = canvas.getContext("webgl2", { antialias: false });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const numParticles = 1000;
    const particleData = new Float32Array(numParticles * 4);
    for (let i = 0; i < numParticles; i++) {
      particleData[i * 4] = Math.random() * 2 - 1; // x
      particleData[i * 4 + 1] = Math.random() * 2 - 1; // y
      particleData[i * 4 + 2] = Math.random() * 0.02 - 0.01; // vx
      particleData[i * 4 + 3] = Math.random() * 0.02 - 0.01; // vy
    }
    const particleBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, particleData, gl.STATIC_DRAW);
    const vertexShaderSource = `
    attribute vec4 a_particle;
    uniform float u_time;
    void main() {
      float angle = u_time;
      mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      vec2 position = a_particle.xy + a_particle.zw * u_time;
      position = rotation * position;
      position = mod(position + 1.0, 2.0) - 1.0;
      gl_Position = vec4(position, 0, 1);
      gl_PointSize = 0.5;
    }
  `;
    const fragmentShaderSource = `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
  }
`;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error(
        "Vertex shader compilation error:",
        gl.getShaderInfoLog(vertexShader)
      );
      return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error(
        "Fragment shader compilation error:",
        gl.getShaderInfoLog(fragmentShader)
      );
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position"
    );
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, -1, 1, 1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    let then = 0;
    function render(now) {
      now *= 0.00001; // convert to seconds
      const deltaTime = now - then;
      then = now;

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const timeUniformLocation = gl.getUniformLocation(program, "u_time");
      gl.uniform1f(timeUniformLocation, now);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      const a_particle = gl.getAttribLocation(program, "a_particle");
      gl.bindBuffer(gl.ARRAY_BUFFER, particleBuffer);
      gl.enableVertexAttribArray(a_particle);
      gl.vertexAttribPointer(a_particle, 4, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.POINTS, 0, numParticles);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }, []);

  return (
    <>
      {" "}
      <canvas id="canv" width="32" height="32"></canvas>
      <div className="safariHack">
        <Header />
        <div className="spacer">
          <section className="contact">
            <h1>Contact</h1>
            <div className="contact-container">
              <div>
                <h2>Discord</h2>
                <p>
                  Send a message here if you want to collaborate on interesting
                  noncommercial projects / open source stuff
                </p>
              </div>
              <a href="http://discordapp.com/users/waltzaround">Contact</a>
            </div>
            <div className="contact-container">
              <div>
                <h2>LinkedIn</h2>
                <p>
                  Send a message here if you want to chat in a professional
                  capacity
                </p>
              </div>{" "}
              <a href="https://www.linkedin.com/in/waltzaround/">Contact</a>
            </div>
            <div className="contact-container">
              <div>
                <h2>Email</h2>
                <p>Email available on request</p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Contact;
