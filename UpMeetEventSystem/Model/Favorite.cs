using System;
using System.Collections.Generic;

#nullable disable

namespace UpMeetEventSystem
{
    public partial class Favorite
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string FirstName { get; set; }

        public virtual Event IdNavigation { get; set; }
    }
}
