canvas = document.getElementById("My_canvas")
ctx = canvas.getContext("2d")
rover_x = 100
rover_y = 150
rover_width = 100
rover_height = 100
Nasa_array = ["mars.jpg", "Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg"]
random_num = Math.floor(Math.random() * 5)
background_image = Nasa_array[random_num]
rover_image = "rover.png"
function add(){
    bg_img = new Image()
    bg_img.onload = uploadbg
    bg_img.src = background_image
    rover_img = new Image()
    rover_img.onload = uploadrover
    rover_img.src = rover_image
}
function uploadbg(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height)
}
window.addEventListener("keydown", My_keydown)
function My_keydown(e){
    keypressed = e.keyCode
    console.log(keypressed)
    if (keypressed == "37"){
        console.log("left key is pressed")
        Left()
    }
    if (keypressed == "38"){
        console.log("up key is pressed")
        Up()
    }
    if (keypressed == "40"){
        console.log("down key is pressed")
        Down()
    }
    if (keypressed == "39"){
        console.log("right key is pressed")
        Right()
    }
}
function Up(){
    if (rover_y >= 0){
        rover_y -= 10
        uploadbg()
        uploadrover()
    }
}
function Down(){
    if (rover_y <= 500){
        rover_y += 10
        uploadbg()
        uploadrover()
    }
}
function Left(){
    if (rover_x >= 0){
        rover_x -= 10
        uploadbg()
        uploadrover()
    }
}
function Right(){
    if (rover_x <= 700){
        rover_x += 10
        uploadbg()
        uploadrover()
    }
}