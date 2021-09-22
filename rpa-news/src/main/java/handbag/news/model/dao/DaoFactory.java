package handbag.news.model.dao;

import handbag.news.db.DB;
import handbag.news.model.dao.impl.NewsDaoJDBC;

public class DaoFactory {

	public static NewsDao createSellerDao() {
		return new NewsDaoJDBC(DB.getConnection());
	}
}
