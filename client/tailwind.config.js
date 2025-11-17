/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                primary: '#000000',
                secondary: '#ffffff',
                accent: '#00ff88',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'glitch': 'glitch 0.3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
                    '100%': { boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' },
                },
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
            },
        },
    },
    plugins: [],
}