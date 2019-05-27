﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations.Storyboard
{
    [DbContext(typeof(StoryboardContext))]
    [Migration("20190514192430_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.StoryboardDetail", b =>
                {
                    b.Property<int>("SBId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("varchar(8000)");

                    b.Property<string>("Scene")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Sourcename")
                        .IsRequired()
                        .HasColumnType("varchar(8000)");

                    b.Property<string>("docurl")
                        .IsRequired()
                        .HasColumnType("varchar(8000)");

                    b.Property<string>("imageurl")
                        .IsRequired()
                        .HasColumnType("varchar(8000)");

                    b.HasKey("SBId");

                    b.ToTable("StoryboardDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
