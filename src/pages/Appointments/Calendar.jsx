import React, { useState, useRef, useEffect } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Calendar() {

    const [events, SetEvents] = useState([{
        title: "title",
        startStr: "2020-02-08",
        endStr: "2020-02-09",
        allDay: true
    }]);
    const [newTitle, setNewTitle] = useState("");
    const [diaglogOpen, setDiaglogOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    const calendarRef = useRef();

    return (
        <div className='demo-app'>
            <div className='demo-app-main'>
                <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={diaglogOpen}>
                    <DialogTitle id="simple-dialog-title">Type New Title</DialogTitle>
                    <TextField id="time" placeholder="Title" type="text"
                        onChange={event => {
                            setNewTitle(event.target.value)
                        }} value={newTitle} inputProps={{ step: 300 }} />
                    <Button variant="contained" color="primary" onClick={UpdateEvent}>
                        Update
                </Button>
                </Dialog>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={true}
                    select={handleDateSelect}
                    eventClick={handleEventClick}
                    events={events}
                    eventAdd={handleEventAdd}
                />
            </div>
        </div>
    )

    function handleDateSelect(selectInfo) {
        let calendarApi = selectInfo.view.calendar
        let title = prompt('Please enter a new title for your event');

        calendarApi.unselect()

        if (title) {
            calendarApi.addEvent({
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            }, true)
        }
    }

    function handleEventClick(clickInfo) {
        setSelectedEvent(clickInfo.event);
        setDiaglogOpen(true);
        clickInfo.event.remove();
    }

    function UpdateEvent() {
        let calendarApi = calendarRef.current.getApi()
        console.log(calendarApi);
        calendarApi.addEvent({
            title: newTitle,
            start: selectedEvent.startStr,
            end: selectedEvent.endStr,
            allDay: selectedEvent.allDay
        });
        handleDialogClose();
    }
    
    function handleDialogClose() {
        setDiaglogOpen(false);
    };

    function handleEventAdd(addInfo) {
        var evnts = events
        events.push(addInfo.event.toPlainObject());
        SetEvents(evnts);
    }


}


export default Calendar