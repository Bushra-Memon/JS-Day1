const activityinput = document.getElementById('activityinput');
const addbtn = document.getElementById('addbtn');
const activitycards= document.getElementById('activitycards');
const totalEl = document.getElementById('total');
const completedEl = document.getElementById('completed');
const pendingEl = document.getElementById('pending');
const errortext= document.getElementById('errortext');

let activities = [];

//Enable/disable button
activityinput.addEventListener('input',() => {
    const val = activityinput.value.trim();
    if(val === '')
    {
        addbtn.disabled = true;
        errortext.textContent = '';
    }
    else
    {
        addbtn.disabled = false;
        errortext.textContent = '';
    }  
});

//Add Activity
addbtn.addEventListener('click',() => {
    const val = activityinput.value.trim()
    if(val === '')
    {
        errortext.textContent = 'Activity cannot be empty!';
        return;
    }

    const activity = {
        Activity_name: val,
        Activity_status: "Pending",
        Activity_created: new Date()

    };
    activities.push(activity);
    activityinput.value = " ";
    addbtn.disabled = true;
    renderActivites();
});

function renderActivites(){
    activitycards.innerHTML = "";

    for (let i = 0; i < activities.length; i++)
    {
        const act = activities[i];
        const card = document.createElement('div');
        card.classList.add('activity-card');

        if(act.Activity_status === 'Completed')
        {
            card.classList.add('completed');
        }

        card.innerHTML = `
        <div>
        <h4>Activity_name: ${act.Activity_name}</h4>
        <p> <b>Activity_status:</b> ${act.Activity_status} <br><b> Created Date & Time:</b> ${act.Activity_created.toLocaleString()}</p>
        </div>
        <button class="toggle-btn" onclick="toggleStatus(${i})">Toggle</button>`;
        activitycards.appendChild(card);
    }
    updatestatus();

}

function toggleStatus(index)
{
    const act = activities[index];
    act.Activity_status = act.Activity_status === 'Pending'? 'Completed':'Pending';
    renderActivites();

}

function updatestatus()
{
const total = activities.length;
const completed = activities.filter(a => a.Activity_status === 'Completed').length;
const pending = total - completed;

totalEl.textContent = total;
completedEl.textContent = completed;
pendingEl.textContent = pending;
}




