<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='shortcut icon' href='./images/logo.png' type='image/x-icon' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet">
    <script src="./js/main.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <title>Feedback</title>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
    <ul class="navbar-brand disabled" href="#" style="width: 10%; margin: 0 0 0 0;">
      <img src="./images/logo.png" alt="" width="60%">
    </ul>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html"><h2>Home</h2> <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="planning.html"><h2>Plannings</h2></a>
        </li>
      <li class="nav-item active">
        <a href="feedback.php" class="nav-link"><h2>Feedback</h2></a>
      </li>
    </div>
  </nav>
    <div class="jumbotron">
        <p>Feedbacks</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p>User Feedbacks</p>
                <div>
                    <h3 style="font-weight:bold;">Yeol William</h3>
                    <h5>yoelwilliam54321@gmail.com</h5>
                    <h3>Feedback :</h3>
                    <h4>most useful app, has all the information you need in order to be sure that where to invest your money and where not.</h4>
                </div>
            </div>
            <div class="col-12">

            </div>
        </div>
    </div>
    <br><br>
    <form action="connect.php" method="POST">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p>Give Feedbacks</p>
                </div>
                <div class="col-md-6" style="border-right: 3px solid #2E86C1; border-left: 3px solid #2E86C1;">

                    <div class="form-group">
                        <label for="InputName1">
                            <h2>First Name</h2>
                        </label>
                        <input type="text" class="form-control" id="InputName1" placeholder="Enter your first name" name="firstname">
                    </div>
                    <div class="form-group">
                        <label for="InputEmail1">
                            <h2>E-Mail</h2>
                        </label>
                        <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email">
                        <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small> -->
                    </div>
                    <div class="form-group">
                        <label for="FormControlTextarea1">
                            <h1>FeedBacks</h1>
                        </label>
                        <textarea name="feedback" class="form-control" id="FormControlTextarea1" rows="9" placeholder="Enter your feedbacks here."></textarea>
                    </div>

                </div>
                <div class="col-md-6" style="border-right: 3px solid #2E86C1; border-left: 3px solid #2E86C1;">

                    <div class="form-group">
                        <label for="exampleInputName2">
                            <h2>Last Name</h2>
                        </label>
                        <input type="text" class="form-control" id="InputName2" placeholder="Enter your last name" name="lastname">
                    </div>
                    <h2>Select the Area</h2>
                    <select class="form-control form-control-lg" name="area" id="area">
                        <option>Select the Area</option>
                        <option value="1">Azad Nagar</option>
                        <option value="2">Kakadeo</option>
                        <option value="3">Panki</option>
                        <option value="4">Armapur</option>
                        <option value="4">Panki</option>
                        <option value="5">Awas Vikas</option>
                        <option value="6">Rawatpur</option>
                        <option value="7">Swaroop Nagar</option>
                        <option value="8">Harsh Nagar</option>
                        <option value="9">Permat</option>
                        <option value="10">Kalyanpur</option>
                        <option value="11">Naubasta</option>
                        <option value="12">Cantt</option>
                        <option value="13">Kidwai Nagar</option>
                        <option value="14">Jajmau</option>
                        <option value="15">General Ganj</option>
                        <option value="16">Yashoda Nagar</option>
                        <option value="17">Govind Nagar</option>
                        <option value="18">Nawab Ganj</option>
                        <option value="19">Shukla Ganj</option>
                    </select>
                    <br>
                    <div class="form-group">
                        <label for="FormControlFile1">
                            <h1>Enter Photos here.</h1>
                        </label>
                        <input type="file" class="form-control-file" id="FormControlFile1">
                    </div>
                    <input type="submit" class="btn btn-primary">

                </div>
            </div>
        </div>
    </form>



    <br><br>
    <footer>
        <div class="container">
            <div class="row" style="border: 0px;">
                <div class="col-lg-4">
                    <h3>Contact Us</h3>
                </div>
                <div class="col-lg-4">
                    <h3>About Us</h3>
                </div>
                <div class="col-lg-4">
                    <h3>Development Team</h3>
                </div>
            </div>
        </div>
    </footer>
    <script src="./js/feedback.js"></script>
</body>

</html>