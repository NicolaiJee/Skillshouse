using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _480_Demo_app.Controllers
{
    public class AjaxController : Controller
    {
        // GET: Json
        public ActionResult CurrentTime()
        {
            return Json(DateTime.Now.ToString("F"), JsonRequestBehavior.AllowGet);
        }

        public ActionResult PostTest(string input)
        {
            return Json(input+ " "+DateTime.Now.ToString("F"), JsonRequestBehavior.AllowGet);
        }
    }
}