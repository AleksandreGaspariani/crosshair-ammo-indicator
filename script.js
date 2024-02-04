

indicatorInit(32,50); // indicatorInit(tyvia aboimashi, aboimis sruli tyviebis raodenoba);


function indicatorInit(ammo,fullAmmo){
    let drawingAmmoNum = 180 / fullAmmo;

    draw(ammo,drawingAmmoNum,fullAmmo);
}

function draw(ammos,drawingAmmoNum,fullAmmo){
    
    $('#indicatorArea').empty();

    $('#indicatorArea').append(`
        <div class="position-absolute text-white-50 d-flex" style='right: -10px; bottom: -10px'>
            <smal class="d-flex" style="font-size: 10px;color: rgb(17, 145, 174);">Ammo: <span>`+ammos+`</span></small>
        </div>
    `);

    if (fullAmmo <= 20) {
        for (let i = 0; i < fullAmmo; i++) {
            $('#indicatorArea').append(`
                <div class='indicator indi`+i+`' style='transform: rotate(`+ drawingAmmoNum * i +`deg) !important; width: 3px !important;'></div>
            `);
        }
    }else {
        for (let i = 0; i < fullAmmo; i++) {
            $('#indicatorArea').append(`
                <div class='indicator indi`+i+`' style='transform: rotate(`+ drawingAmmoNum * i +`deg) !important'></div>
            `);
        }
        
    }

    let test = fullAmmo - ammos;
    
    for (let i = 0; i < test; i++) {
        $('.indi'+i).css('background-color','black');
    }


}
