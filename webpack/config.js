export const isDebug = !process.argv.includes('--env.release');
export const isVerbose = process.argv.includes('--env.verbose');
export const isAnalyze = process.argv.includes('--env.analyze') || process.argv.includes('--analyse');
