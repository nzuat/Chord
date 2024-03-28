const arrayofkeys = ["C Dm Em F G Am Bdim"
,"G Am Bm C D Em F♯dim"
,"D Em F♯m G A Bm C♯dim"
,"A Bm C♯m D E F♯m G♯dim"
,"E F♯m G♯m A B C♯m D♯dim"
,"B C♯m D♯m E F♯ G♯m A♯dim"
,"F♯ G♯m A♯m B C♯ D♯m E♯dim"
,"C♯ D♯m E♯m F♯ G♯ A♯m B♯dim"
,"F Gm Am B♭ C Dm Edim"
,"B♭ Cm Dm E♭ F Gm Adim"
,"E♭ Fm Gm A♭ B♭ Cm Ddim"
,"A♭ B♭m Cm D♭ E♭ Fm Gdim"
,"D♭ E♭m Fm G♭ A♭ B♭m Cdim"
,"G♭ A♭m B♭m C♭ D♭ E♭m Fdim"
,"C♭ D♭m E♭m F♭ G♭ A♭m B♭dim"]
function findkey(x){
    return(arrayofkeys[x])
}
function check_and_alert(){
    try{
        let key
        if (document.getElementById("CM_Am").checked == true){
            key = 0
        }
        if (document.getElementById("GM_Em").checked == true){
            key = 1
        }
        if (document.getElementById("DM_Bm").checked == true){
            key = 2
        }
        if (document.getElementById("AM_F#m").checked == true){
            key = 3
        }
        if (document.getElementById("EM_C#m").checked == true){
            key = 4
        }
        if (document.getElementById("BM_G#m").checked == true){
            key = 5
        }
        if (document.getElementById("F#M_D#m").checked == true){
            key = 6
        }
        if (document.getElementById("C#M_A#m").checked == true){
            key = 7
        }
        if (document.getElementById("FM_Dm").checked == true){
            key = 8
        }
        if (document.getElementById("BbM_Gm").checked == true){
            key = 9
        }
        if (document.getElementById("EbM_Cm").checked == true){
            key = 10
        }
        if (document.getElementById("AbM_Fm").checked == true){
            key = 11
        }
        if (document.getElementById("DbM_Bbm").checked == true){
            key = 12
        }
        if (document.getElementById("GbM_Ebm").checked == true){
            key = 13
        }
        if (document.getElementById("CbM_Abm").checked == true){
            key = 14
        }
        if (key == undefined){
            alert ("Error")
        }else{
            alert (findkey(key))
        }
    }catch{
        alert ("Error")
    }
}