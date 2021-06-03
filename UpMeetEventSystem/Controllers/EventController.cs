using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UpMeetEventSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        // api/event/GetEvent
        [HttpGet("GetEvent")]

        public List<Event> GetEvent()
        {
            using(EventDBContext context = new EventDBContext())
            {
                return context.Events.ToList();
            }
        }
    }
}
