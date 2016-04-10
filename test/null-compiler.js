function nullify() { return null; }

require.extensions['.css'] = nullify;
require.extensions['.less'] = nullify;
require.extensions['.png'] = nullify;
require.extensions['.jpg'] = nullify;

// https://gist.github.com/daviferreira/1503ce0532abca270b86