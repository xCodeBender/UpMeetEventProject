using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace UpMeetEventSystem
{
    public partial class EventDBContext : DbContext
    {
        public EventDBContext()
        {
        }

        public EventDBContext(DbContextOptions<EventDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<Favorite> Favorites { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=EventDB; Integrated Security=SSPI;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Event>(entity =>
            {
                entity.ToTable("Event");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.EventLocation)
                    .HasMaxLength(250)
                    .HasColumnName("eventLocation");

                entity.Property(e => e.EventName)
                    .HasMaxLength(250)
                    .HasColumnName("eventName");

                entity.Property(e => e.PostTime)
                    .HasColumnType("datetime")
                    .HasColumnName("postTime");

                entity.Property(e => e.Price).HasColumnName("price");
            });

            modelBuilder.Entity<Favorite>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Favorite");

                entity.Property(e => e.EventId).HasColumnName("eventID");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(250)
                    .HasColumnName("firstName");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.UserId)
                    .HasMaxLength(250)
                    .HasColumnName("userId");

                entity.HasOne(d => d.IdNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Id)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Favorite__id__25869641");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
