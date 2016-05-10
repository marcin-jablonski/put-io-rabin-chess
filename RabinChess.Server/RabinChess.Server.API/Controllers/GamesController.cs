using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using RabinChess.Server.API.Models;
using RubinChess.Server.Logic;

namespace RabinChess.Server.API.Controllers
{
    [Route("api/Games")]
    public class GamesController : ApiController
    {
        [Route("api/Games")]
        [HttpGet]
        public List<GameListItemViewModel> Get()
        {
            return ContextFactory.GetGamesContext().GetGames(1).Select(item => (GameListItemViewModel) item).ToList();
        }
    }
}
