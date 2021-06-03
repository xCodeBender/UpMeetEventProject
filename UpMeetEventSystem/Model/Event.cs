using System;
using System.Collections.Generic;

#nullable disable

namespace UpMeetEventSystem
{
    public partial class Event
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public double? Price { get; set; }
        public string EventLocation { get; set; }
        public DateTime? PostTime { get; set; }
    }
}
