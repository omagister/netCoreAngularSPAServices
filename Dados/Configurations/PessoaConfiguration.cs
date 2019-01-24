using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Dominio.Entidades;

namespace Dados.Configurations
{
    public class PessoaConfiguration : IEntityTypeConfiguration<Pessoa>
    {
        public void Configure(EntityTypeBuilder<Pessoa> builder)
        {
            // propriedades
            builder.Property(t => t.Nome)
                .HasColumnType("varchar(80)")
                .IsRequired();

            builder.Property(t => t.Sobrenome)
                .HasColumnType("varchar(20)")
                .IsRequired();

            builder.Property(t => t.Email)
                .HasColumnType("varchar(50)");

            builder.Property(t => t.Cpf)
                .HasColumnType("varchar(14)");

            builder.Property(t => t.Endereco)
                .HasColumnType("varchar(100)");

            builder.Property(t => t.Bairro)
                .HasColumnType("varchar(50)");

            builder.Property(t => t.Cidade)
                .HasColumnType("varchar(50)");

            builder.Property(t => t.Estado)
                .HasColumnType("varchar(2)");

            builder.Property(t => t.Cep)
                .HasColumnType("varchar(10)");
        }
    }
}
