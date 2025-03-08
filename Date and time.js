<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Display Date and Time</title>
</head>
<body>
    <h1>Current Date and Time</h1>
    <button onclick="showDateTime()">Show Date and Time</button>
    <p id="datetime"></p>

    <script>
        function showDateTime() {
            var now = new Date();
            document.getElementById("datetime").textContent = now;
        }
    </script>
</body>
</html>