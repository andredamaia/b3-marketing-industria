<?php include('config.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />
        
        <base href="/" />
        
        <title><?php echo $title; ?></title>
        
        <meta name="description" content="<?php echo $description; ?>" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $pageurl; ?>/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="60x60" href="<?php echo $pageurl; ?>/images/favicon.png" />
        <link rel="manifest" href="<?php echo $pageurl; ?>/site.webmanifest" />
        
        <meta name="msapplication-TileColor" content="#eaeced" />
        <meta name="theme-color" content="#eaecedf" />
        
        <link href="<?php echo $pageurl; ?>/styles/styles.css?v1.2" rel="stylesheet" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="<?php echo $title; ?>" />
        <meta property="og:description" content="<?php echo $description; ?>" />
        <meta property="og:image" content="<?php echo $pageurl; ?>/images/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="<?php echo $title; ?>" />
        <meta name="twitter:description" content="<?php echo $description; ?>" />
        <meta name="twitter:image" content="<?php echo $pageurl; ?>/images/" />
    </head>

    <body id="<?php echo $page; ?>">
        <div class="webapp">
            <?php include('components/preload.php'); ?>
            
            <?php include('components/header.php'); ?>
        
            <?php
                if($page != NULL){
                    include('pages/'.$page.'.php');
                }
            ?>
        
        <?php include('components/footer.php'); ?>
        </div>
    </body>
</html>

<script src="<?php echo $pageurl; ?>/scripts/wow.js"></script>
<script src="<?php echo $pageurl; ?>/prod/scripts.js"></script>
<script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="<?php echo $pageurl; ?>/scripts/base.js" type="module"></script>