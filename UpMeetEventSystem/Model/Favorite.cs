using System;
using System.Collections.Generic;

#nullable disable

namespace UpMeetEventSystem
{
    public partial class Favorite
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public int? EventId { get; set; }
        public int? LoginId { get; set; }

        public virtual Event IdNavigation { get; set; }
    }
}
