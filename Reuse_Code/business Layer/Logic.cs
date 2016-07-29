using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reuse_Code
{
    public static class Logic
    {

        //internal static object GetcategoryName(string ReuseName)
        //{
        //    ResponsivewebEntities Db = new ResponsivewebEntities();
        //    Db.Configuration.ProxyCreationEnabled = false;
        //    var result = (from Rni in Db.tbl_ReuseNameInfo
        //                  where Rni.ReuseType.Equals(ReuseName)
        //                  select Rni).ToList();
        //    return result;
        //}

        internal static List<Files> SelectedReuseTypeInfo(string ReuseName)
        {
            ResponsivewebEntities Db = new ResponsivewebEntities();
            Db.Configuration.ProxyCreationEnabled = false;
            var result = (from rni in Db.tbl_ReuseNameInfo
                          where rni.ReuseType.Equals(ReuseName)
                          join rd in Db.tbl_ReuseData on rni.S_no equals rd.ReuseId into partIneers
                          from part in partIneers.DefaultIfEmpty()
                          group new { rni, part } by new { part.ReuseId } into statsGroup

                          select new { statsGroup }).ToList();
            List<Files> SubType = new List<Files>();

            foreach (var reuseSubType in result)
            {
                List<FileInfo> filedetails = new List<FileInfo>();
                foreach (var fileinfo in reuseSubType.statsGroup.ToList())
                {
                    var classdetails = new FileInfo
                    {
                        filename = fileinfo.part.FileName,
                       
                        ID=fileinfo.part.S_no
                    };
                    filedetails.Add(classdetails);
                }
                var subtypeobj=new Files
                {
                    ReuseSubType=reuseSubType.statsGroup.ToList()[0].rni.SubType,
                    fileinfo = filedetails
                };
                SubType.Add(subtypeobj);
            }

            return SubType; 
        }
        internal static List<tbl_ReuseData> FetchSelectedClassData(int classID)
        {
            ResponsivewebEntities Db = new ResponsivewebEntities();
            Db.Configuration.ProxyCreationEnabled = false;
            List<tbl_ReuseData> result = (from rd in Db.tbl_ReuseData
                          where rd.S_no.Equals(classID)

                          select rd).ToList();
            



            return result;
        }
    }
}