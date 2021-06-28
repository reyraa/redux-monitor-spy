import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['./src/app.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    tsconfig: 'tsconfig.json',
    outfile: './public/bundle.js',
    // splitting: true,
    // chunkNames: "",
    define: {
      'process.env.NODE_ENV': '"production"',
    },
  })
  .catch(() => process.exit(1))
