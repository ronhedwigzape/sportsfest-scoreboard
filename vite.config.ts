import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
    const config = {
        plugins: [vue()],
        base: undefined
    };

    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const SKIP_BASE_PATH = process.env.VITE_SKIP_BASE_BATH;
    if (SKIP_BASE_PATH === undefined || SKIP_BASE_PATH === 'false')
        config.base = '/sportsfest-scoreboard/';

    return defineConfig(config);
}
