const connect_btn = document.querySelector('#connect_btn');

connect_btn.addEventListener('click', () => {
    var workbench_user_id = document.getElementById("workbench_user_id").value;

    fetch('http://10.0.4.87:5000/connect', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        body: JSON.stringify({
            "workbench_user_id":workbench_user_id
        })
    })
    .then(response => {
        if(workbench_user_id == "keti_opencsd"){
            window.location.href = '/monitoring';
        }else{
            window.location.href = '/monitoring_ssd';
        }
    })
    .catch(error => {
        alert(error); 
    });
});

