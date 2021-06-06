﻿using Microsoft.AspNetCore.Http;
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

        // api/event/AddEvent
        [HttpPost("AddEvent")]
        public Event AddEvent(string eventName, double? price, string eventLocation, DateTime postTime)
        {
            using (EventDBContext context = new EventDBContext())
            {
                Event newEvent = new Event();
                newEvent.EventName = eventName;
                newEvent.Price = price;
                newEvent.EventLocation = eventLocation;
                newEvent.PostTime = postTime;
                context.Add(newEvent);
                context.SaveChanges();
                return newEvent;

            }
        }

        // api/event/id
        [HttpGet("id")]
        public Event GetEventByID(int id)
        {
            using (EventDBContext context = new EventDBContext())
            {
                Event newEvent = new Event();
                newEvent = context.Events.ToList().Find(i => i.Id == id);
                
                return newEvent;

            }
        }

        // api/event/AddFavorite
        [HttpPost("AddFavorite")]
        public Favorite AddFavorite(int Id, int LoginId, string FirstName, int? EventId)
        {
            using (EventDBContext context = new EventDBContext())
            {
                Favorite newFav = new Favorite();
                newFav.Id = Id;
                newFav.LoginId = LoginId;
                newFav.FirstName = FirstName;
                newFav.EventId = EventId;
                context.Add(newFav);
                context.SaveChanges();
                return newFav;

            }
        }

        // api/event/DeleteFavorite
        [HttpDelete("DeleteFavorite")]
        public Favorite DeleteFavorite(int Id, int LoginId, string FirstName, int? EventId)
        {
            using (EventDBContext context = new EventDBContext())
            {
                Favorite newFav = new Favorite();
                newFav.Id = Id;
                newFav.LoginId = LoginId;
                newFav.FirstName = FirstName;
                newFav.EventId = EventId;
                context.Remove(newFav);
                context.SaveChanges();
                return newFav;
                // OR use Linq instead to delte favorite from list newFav = context.Favorites.ToList().Find(f => f.Id == id);
            }
        }


    }
}
