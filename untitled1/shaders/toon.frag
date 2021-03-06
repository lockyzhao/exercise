 varying vec3 normal;
void main() {
    float intensity;
    vec4 color;
    vec3 n = normalize(normal);
    vec3 l = normalize(gl_LightSource[0].position).xyz;

    // quantize to 5 steps (0, .25, .5, .75 and 1)
    intensity = (floor(dot(l, n) * 4.0) + 1.0)/4.0;
    color = vec4(intensity*1.0, intensity*0.5, intensity*0.5,
        intensity*1.0);

    gl_FragColor = color;
}