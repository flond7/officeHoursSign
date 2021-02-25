<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="orari.min.css">
    <link rel="stylesheet" href="bootstrap-grid.min.css">
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="animate.min.css">
    <script src="orari.js"></script>
</head>

<body>
    <div class="container d-flex align-items-start mt-2">
        <div class="row">

            <div class="col-12 h-75">
                <h1 class="w-100 border-bottom">Uffici</h1>
                <!-- uffici -->
                <?php require('includes/uffici_vert.php');?>
            </div>

            <div class="col-12 h-25">
                <!-- avvisi -->
                <?php require('includes/avvisi_vert.php');?>
            </div>
            
        </div>
    </div>

    <div id="loader-container">
        <div id="loading-bar"></div>
    </div>

</body>

</html>