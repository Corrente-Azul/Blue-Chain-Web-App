/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}"
    ],
    "theme": {
          "extend": {
                "colors": {
                      "gray": {
                            "100": "#fefcfb",
                            "200": "#0a1128",
                            "300": "rgba(10, 17, 40, 0.3)",
                            "400": "rgba(254, 252, 251, 0.75)"
                      },
                      "white": "#fff",
                      "black": "#000",
                      "steelblue": "#1282a2"
                },
                "fontFamily": {
                      "inter": "Inter"
                }
          }
    },
    "corePlugins": {
          "preflight": false
    }
}