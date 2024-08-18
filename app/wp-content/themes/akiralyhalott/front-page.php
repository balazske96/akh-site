<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Király Halott | Hivatalos weboldal</title>
    <link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri() . '/build/main.css' ?>' />
</head>

<body class="mx-auto bg-[var(--smoke-white)]">
    <?php get_template_part('template-parts/navbar'); ?>
    <?php get_template_part('template-parts/hero'); ?>
</body>

</html>