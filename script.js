var a = 1

function eye() {
    if (a == 1) {
        document.getElementById("pass_eye").src = "images/view.png"
        document.getElementById("password").type = "text"

        if (document.getElementById("con_password") != null) {
            document.getElementById("con_password").type = "text"
        }


        a = 0
    } else {
        document.getElementById("pass_eye").src = "images/hide.png"
        document.getElementById("password").type = "password"
        if (document.getElementById("con_password") != null) {
            document.getElementById("con_password").type = "password"
        }
        a = 1
    }
}

function login_pannel() {

    if (document.getElementById("mainpannel_2") != null) {
        document.getElementById("mainpannel_2").remove();
    }

    var div = document.createElement("div")
    div.setAttribute("id", "mainpannel_2")
    div.setAttribute("class", "col-md-6")

    //elements of mainpannel_2 of login

    var uname = document.createElement("label")
    uname.innerHTML = "UserName"
    div.append(uname)

    var uname_inp = document.createElement("input")
    uname_inp.type = "text"
    uname_inp.setAttribute("id", "user_name")
    uname_inp.placeholder = "Enter UserName"
    div.append(uname_inp)

    var pas_lab = document.createElement("label")
    pas_lab.innerHTML = "Password"
    div.append(pas_lab)

    var pas_inp = document.createElement("input")
    pas_inp.type = "password"
    pas_inp.setAttribute("id", "password")
    pas_inp.placeholder = "Password"
    div.append(pas_inp)

    var eye_img = document.createElement("img")
    eye_img.src = "images/hide.png"
    eye_img.setAttribute("onclick", "eye()")
    eye_img.setAttribute("id", "pass_eye")
    div.append(eye_img)

    var login_button = document.createElement("button")
    login_button.innerHTML = "LogIn"
    login_button.setAttribute("id", "login_btn")
    login_button.setAttribute("onclick", "login()")
    div.append(login_button)

    document.getElementById("mainpannel").append(div)

    // twiking some property

    document.getElementById("lg_sp_pannel").style.height = "60vh"
    document.getElementById("lg_sp_pannel").style.marginTop = "2vh"
    document.getElementById("login").style.filter = "drop-shadow(0px 0px 3px rgb(255, 255, 255))"
    document.getElementById("login").style.color = "white"
    document.getElementById("pass_eye").style.top = "-11.4vh"
    document.getElementById("signup").style.filter = "drop-shadow(0px 0px 0px)"
    document.getElementById("signup").style.color = "rgb(161, 161, 161)"
    document.getElementById("footer").style.top="21.7vh"
    document.getElementById("title").innerHTML="LogIn"
}

function signup_pannel() {

    if (document.getElementById("mainpannel_2") != null) {
        document.getElementById("mainpannel_2").remove();
    }

    var div = document.createElement("div")
    div.setAttribute("id", "mainpannel_2")
    div.setAttribute("class", "col-md-6")

    //elements of mainpannel_2 of signup

    var email = document.createElement("label")
    email.innerHTML = "E-mail"
    div.append(email)

    var email_inp = document.createElement("input")
    email_inp.type = "email"
    email_inp.setAttribute("id", "mail")
    email_inp.placeholder = "Enter Your Mail"
    div.append(email_inp)

    var uname = document.createElement("label")
    uname.innerHTML = "UserName"
    div.append(uname)

    var uname_inp = document.createElement("input")
    uname_inp.type = "text"
    uname_inp.setAttribute("id", "user_name")
    uname_inp.placeholder = "Enter UserName"
    div.append(uname_inp)

    var pas_lab = document.createElement("label")
    pas_lab.innerHTML = "Password"
    div.append(pas_lab)

    var pas_inp = document.createElement("input")
    pas_inp.type = "password"
    pas_inp.setAttribute("id", "password")
    pas_inp.placeholder = "Password"
    div.append(pas_inp)

    var eye_img = document.createElement("img")
    eye_img.src = "images/hide.png"
    eye_img.setAttribute("onclick", "eye()")
    eye_img.setAttribute("id", "pass_eye")
    div.append(eye_img)

    var re_pas_lab = document.createElement("label")
    re_pas_lab.innerHTML = "Confirm Password"
    re_pas_lab.setAttribute("id", "c_pass_label")
    div.append(re_pas_lab)

    var re_pas_inp = document.createElement("input")
    re_pas_inp.type = "password"
    re_pas_inp.setAttribute("id", "con_password")
    re_pas_inp.placeholder = "Re-Enter Password"
    div.append(re_pas_inp)

    var login_button = document.createElement("button")
    login_button.innerHTML = "SignUp"
    login_button.setAttribute("id", "Signup_btn")
    login_button.setAttribute("onclick", "Signup()")
    div.append(login_button)

    document.getElementById("mainpannel").append(div)

    // twiking some property

    document.getElementById("lg_sp_pannel").style.height = "85vh"
    document.getElementById("lg_sp_pannel").style.marginTop = "-4vh"
    document.getElementById("signup").style.filter = "drop-shadow(0px 0px 3px rgb(255, 255, 255))"
    document.getElementById("signup").style.color = "white"
    document.getElementById("pass_eye").style.top = "-7.7vh"
    document.getElementById("login").style.filter = "drop-shadow(0px 0px 0px)"
    document.getElementById("login").style.color = "rgb(161, 161, 161)"
    document.getElementById("footer").style.top="0.7vh"
    document.getElementById("title").innerHTML="SignUp"

}

function login_page() {

    if (document.getElementById("lg_sp_pannel") != null) {
        return
    }
    if (document.getElementById("mainpannel_contact") != null) {
        document.getElementById("mainpannel_contact").remove()

    }

    var lg_sp_pannel = document.createElement("div")
    lg_sp_pannel.setAttribute("id", "lg_sp_pannel")

    var lg_pannel = document.createElement("div")
    lg_pannel.setAttribute("id", "lg_pannel")
    lg_sp_pannel.append(lg_pannel)

    var pannel_head = document.createElement("div")
    pannel_head.setAttribute("id", "pannel_head")
    lg_pannel.append(pannel_head)

    //login button

    var login_a = document.createElement("div")
    pannel_head.append(login_a)

    var login_a_btn = document.createElement("a")
    login_a_btn.setAttribute("id", "login")
    login_a_btn.setAttribute("class", "buttons")
    login_a_btn.setAttribute("onclick", "login_pannel()")
    login_a_btn.innerHTML = "LogIn"
    login_a.append(login_a_btn)

    //signup button

    var signup_a = document.createElement("div")
    pannel_head.append(signup_a)

    var signup_a_btn = document.createElement("a")
    signup_a_btn.setAttribute("id", "signup")
    signup_a_btn.setAttribute("class", "buttons")
    signup_a_btn.setAttribute("onclick", "signup_pannel()")
    signup_a_btn.innerHTML = "SignUp"
    signup_a.append(signup_a_btn)

    //mainpannel

    var mainpannel = document.createElement("div")
    mainpannel.setAttribute("id", "mainpannel")
    lg_pannel.append(mainpannel)

    document.getElementById("output_pannel").append(lg_sp_pannel)

    //twiking some css

    document.getElementById("login_head").setAttribute("class", "head_runtime")
    document.getElementById("Home_head").setAttribute("class", "head_item")
    document.getElementById("Contact_head").setAttribute("class", "head_item")

    login_pannel()
}

function contact_page() {

    if (document.getElementById("mainpannel_contact")!=null) {
        return
    }

    if (document.getElementById("lg_sp_pannel")!=null) {
        document.getElementById("lg_sp_pannel").remove()
    }

    var mainpannel_contact = document.createElement("div")
    mainpannel_contact.setAttribute("id", "mainpannel_contact")

    // contact info

    var contact_info_pannel = document.createElement("div")
    contact_info_pannel.setAttribute("id", "contact_info_pannel")
    mainpannel_contact.append(contact_info_pannel)

    var contact_info_heading = document.createElement("h1")
    contact_info_heading.setAttribute("id", "contact_info_heading")
    contact_info_heading.innerHTML = "Contact Info"
    contact_info_pannel.append(contact_info_heading)

    var contact_info = document.createElement("div")
    contact_info.setAttribute("id", "contact_info")
    contact_info_pannel.append(contact_info)

    //LinkedIn

    var linkedIn = document.createElement("div")
    linkedIn.setAttribute("class", "linkedIn")
    contact_info.append(linkedIn)

    var i_linkedin = document.createElement("i")
    i_linkedin.setAttribute("class", "fa-brands fa-linkedin")
    linkedIn.append(i_linkedin)

    var label_linkedin = document.createElement("label")
    label_linkedin.innerHTML = "LinkedIn :"
    linkedIn.append(label_linkedin)

    var p_linkedin = document.createElement("p")
    p_linkedin.setAttribute("class", "contact_links")
    linkedIn.append(p_linkedin)

    var a_linkedin = document.createElement("a")
    a_linkedin.setAttribute("id", "linkedin_link")
    a_linkedin.href = "https://www.linkedin.com/in/lakshay-khanagwal/"
    a_linkedin.innerHTML = "lakshay-khanagwal"
    p_linkedin.append(a_linkedin)

    //mail

    var mail = document.createElement("div")
    mail.setAttribute("class", "Mail")
    contact_info.append(mail)

    var mail_span = document.createElement("span")
    mail_span.setAttribute("class", "glyphicon glyphicon-envelope")
    mail.append(mail_span)

    var mail_label = document.createElement("label")
    mail_label.innerHTML = "Mail :"
    mail.append(mail_label)

    var p_mail = document.createElement("p")
    p_mail.setAttribute("class", "contact_links")
    p_mail.innerHTML = "abc@gmail.com"
    mail.append(p_mail)

    // phone number

    var phone = document.createElement("div")
    phone.setAttribute("class", "Phone No.")
    contact_info.append(phone)

    var phone_span = document.createElement("span")
    phone_span.setAttribute("class", "glyphicon glyphicon-phone-alt")
    phone.append(phone_span)

    var label_phone = document.createElement("label")
    label_phone.innerHTML = "Phone No. :"
    phone.append(label_phone)

    var p_phone = document.createElement("p")
    p_phone.setAttribute("class", "contact_links")
    p_phone.innerHTML = "+91-87XXXXXX97"
    phone.append(p_phone)


    // complain box

    var complain_box = document.createElement("div")
    complain_box.setAttribute("id", "complain_box")
    mainpannel_contact.append(complain_box)

    var c_box_heading = document.createElement("h1")
    c_box_heading.setAttribute("id", "c_box_heading")
    c_box_heading.innerHTML = "Complain Box"
    complain_box.append(c_box_heading)

    var c_box_input = document.createElement("div")
    c_box_input.setAttribute("id", "c_box_input")
    complain_box.append(c_box_input)

    //input_box_pannel

    var c_box_input_pannel = document.createElement("div")
    c_box_input_pannel.setAttribute("id", "c_box_input_pannel")
    c_box_input.append(c_box_input_pannel)

    var label_name = document.createElement("label")
    label_name.innerHTML = "Name"
    c_box_input_pannel.append(label_name)

    var c_name = document.createElement("input")
    c_name.setAttribute("id", "c_name")
    c_name.type = "text"
    c_name.placeholder = "Enter Your Name"
    c_box_input_pannel.append(c_name)

    var label_email = document.createElement("label")
    label_email.innerHTML = "E-Mail"
    c_box_input_pannel.append(label_email)

    var c_email = document.createElement("input")
    c_email.setAttribute("id", "c_mail")
    c_email.type = "email"
    c_email.placeholder = "Enter Your E-Mail"
    c_box_input_pannel.append(c_email)

    var label_complain = document.createElement("label")
    label_complain.innerHTML = "Complain"
    c_box_input_pannel.append(label_complain)

    var Complain_area=document.createElement("textarea")
    Complain_area.name="Complain_area"
    Complain_area.cols="38"
    Complain_area.rows="3"
    Complain_area.setAttribute("id","Complain_area")
    c_box_input_pannel.append(Complain_area)

    var submit_button = document.createElement("button")
    submit_button.setAttribute("id","c_submit")
    submit_button.innerHTML="Submit"
    c_box_input_pannel.append(submit_button)

    document.getElementById("output_pannel").append(mainpannel_contact)

    //twiking some css

    document.getElementById("login_head").setAttribute("class", "head_item")
    document.getElementById("Home_head").setAttribute("class", "head_item")
    document.getElementById("Contact_head").setAttribute("class", "head_runtime")
    document.getElementById("footer").style.top="4.7vh"
    document.getElementById("title").innerHTML="Contact"
}