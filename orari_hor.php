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
    <div class="container container_hor d-flex align-items-start mt-5">
        <div class="row">

            <div class="col-9">
                <h1 class="w-100 border-bottom">Uffici</h1>
                <!-- uffici -->
                <?php require('includes/uffici.php');?>
            </div>

            <div class="col-3">
                <!-- avvisi -->
                <?php require('includes/avvisi.php');?>
            </div>
            
        </div>
    </div>

    <div id="loader-container">
        <div id="loading-bar"></div>
    </div>

</body>

</html>