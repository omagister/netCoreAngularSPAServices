using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dados.Contexto;
using Dominio.Entidades;

namespace AngularAspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class PessoaController : Controller
    {
        private readonly ContextoDados _context;

        public PessoaController(ContextoDados context)
        {
            _context = context;
        }

        // GET: Pessoa
        [HttpGet("[action]")]
        public IEnumerable<Pessoa> Pessoas()
        {
            var pessoas = _context.Pessoas.ToList();

            return pessoas;
        }

        [HttpPost("[action]")]
        public void IncluiPessoa(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            _context.SaveChanges();
        }
    }
}