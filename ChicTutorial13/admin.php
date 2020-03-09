<?php
//This file is the base for all pages in the site. When creating a new page, we just open this one, then save a copy as the new page.
	include("dbconnect.php");
	session_start();
	if(isset($_GET['logout'])) {
		unset($_SESSION['admin']);
	}
	
	if(isset($_POST['login'])) {
		$login_sql="SELECT * FROM user WHERE username='".$_POST['username']."' AND password='".sha1($_POST['password'])."'";
		$login_query=mysqli_query($dbconnect, $login_sql);
		if(mysqli_num_rows($login_query)>0) {
			$login_rs=mysqli_fetch_assoc($login_query);
			$_SESSION['admin']=$login_rs['username'];
		} else {
			header("Location:admin.php?error=login");
		}
	}
?>
<html>
<head>
<title>Welcome to Chic Clothing</title>

<link href="styles.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div class="container">
	<?php
		include("header.php");
	?>
    <div class="maincontent">
 <!-- main content goes here-->
      <?php if(!isset($_SESSION['admin'])) {
		include("login.php");
		} else {
		include("adminpanel.php");
		}
		?>
  </div>
    <?php
		include("seccontent.php");
	?>

	<div class="footer"></div>
</div><!-- Container ends here-->
</body>
</html>
