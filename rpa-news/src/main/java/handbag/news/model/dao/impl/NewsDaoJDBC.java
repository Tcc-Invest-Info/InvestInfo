package handbag.news.model.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import handbag.news.db.DB;
import handbag.news.db.DbException;
import handbag.news.model.dao.NewsDao;
import handbag.news.model.entities.News;

public class NewsDaoJDBC implements NewsDao {

	private Connection conn;

	public NewsDaoJDBC(Connection conn) {
		this.conn = conn;
	}

	public void insert(News obj) {
		PreparedStatement st = null;
		try {
			st = conn.prepareStatement(
					"INSERT INTO public.tb_news " + "(date_news, title, url) " + "VALUES " + "(?, ?, ?)",
					Statement.RETURN_GENERATED_KEYS);

			st.setString(1, obj.getData());
			st.setString(2, obj.getTitle());
			st.setString(3, obj.getUrl());

			int rowsAffected = st.executeUpdate();

			if (rowsAffected > 0) {
				ResultSet rs = st.getGeneratedKeys();
				if (rs.next()) {
					int id = rs.getInt(1);
					obj.setId(id);
				}
				DB.closeResultSet(rs);
			} else {
				throw new DbException("Unexpected error! No rows affected!");
			}
		} catch (SQLException e) {
			throw new DbException(e.getMessage());
		} finally {
			DB.closeStatement(st);
		}
	}

	public List<News> findTitle() {
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			st = conn.prepareStatement("SELECT title FROM public.tb_news");
			rs = st.executeQuery();

			List<News> list = new ArrayList<>();

			while (rs.next()) {
				News news = new News();
				news.setTitle(rs.getString("title"));
				list.add(news);
			}
			return list;
		} catch (Exception e) {
			throw new DbException(e.getMessage());
		} finally {
			DB.closeStatement(st);
			DB.closeResultSet(rs);
		}
	}

	public List<News> findAll() {
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			st = conn.prepareStatement("SELECT * FROM public.tb_news order by date_news desc");
			rs = st.executeQuery();

			List<News> list = new ArrayList<>();

			while (rs.next()) {
				News news = new News();
				news.setTitle(rs.getString("title"));
				news.setData(rs.getString("date_news"));
				news.setUrl(rs.getString("url"));
				list.add(news);
			}
			return list;
		} catch (Exception e) {
			throw new DbException(e.getMessage());
		} finally {
			DB.closeStatement(st);
			DB.closeResultSet(rs);
		}
	}
}