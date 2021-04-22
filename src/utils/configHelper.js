import $ from 'jquery';

export default function makeAssetsPath(path) {
    const $config = $('.js-config');
    if (!$config.length || !$config.data('assets-path')) { return path; }

    return `${$config.data('assets-path')}${path}`;
}
