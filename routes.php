<?php

require_once __DIR__.'/router.php';

// ##################################################
// ##################################################
// ##################################################

// Static GET
// In the URL -> http://localhost
// The output -> Index
get('/', 'ar/index.php');
get('/ar', 'ar/index.php');
get('/ar/privacy-policy', 'ar/Privacy_Policy.php');
get('/ar/terms-&-conditions', 'ar/terms_and_conditions.php');
get('/en', 'en/index.php');
get('/en/privacy-policy', 'en/Privacy_Policy.php');
get('/en/terms-&-conditions', 'en/terms_and_conditions.php');

