using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Dominio.Entidades;
using Dados.Configurations;

namespace Dados.Contexto
{
    public class ContextoDados : DbContext
    {
        public DbSet<Pessoa> Pessoas { get; set; }

        public ContextoDados(DbContextOptions<ContextoDados> options) : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    //options.UseSqlServer("Data Source=SQL5037.site4now.net;Initial Catalog=DB_A4146E_Geloc;User Id=DB_A4146E_Geloc_admin;Password=Webdev@34;");
        //    options.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=angularGeloc;User Id=sa;Password=zaxx34;");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new PessoaConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
