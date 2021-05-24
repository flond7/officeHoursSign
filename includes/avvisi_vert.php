<?php
/* get json */
$json = file_get_contents('./json/avvisi.json');
$j_data = json_decode($json, true);
?>

<h1 class="w-100 border-bottom text-center mb-3">Avvisi</h1>

<?php foreach($j_data as $key=>$value): ?>
  <p class="py-3 border-gray avviso"><?= $value["text"]; ?>
<?php endforeach; ?>