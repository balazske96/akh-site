<?php

function render_product_carousel(array $product)
{
    $name = $product['name'] ?? 'Termék';
    $price = $product['price'] ?? 0;
    $image_url = $product['image'] ?? 'https://ciak.fi.it/media/wysiwyg/icon_cms1.png';
    $product_url = $product['link']

?>

    <li class="glide__slide">
        <a class="product_slide_link" href="<?php echo $product_url ?>" data-title="<?php echo $name; ?>" data-price="<?php echo $price; ?>" data-image-src="<?php echo $image_url ?>" data-product-url="<?php echo $product_url ?>">
            <img src="<?php echo $image_url ?>" alt="">
        </a>
    </li>

<?php
}
