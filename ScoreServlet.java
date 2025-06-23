import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ScoreServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        String username = request.getParameter("username");
        int attempts = Integer.parseInt(request.getParameter("attempts"));
        int timeTaken = Integer.parseInt(request.getParameter("timeTaken"));

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/flip_card_db", "root", "password");
            PreparedStatement ps = con.prepareStatement("INSERT INTO game_scores(username, attempts, time_taken) VALUES (?, ?, ?)");
            ps.setString(1, username);
            ps.setInt(2, attempts);
            ps.setInt(3, timeTaken);
            ps.executeUpdate();
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        PrintWriter out = response.getWriter();
        out.println("<h1>Score Submitted Successfully!</h1>");
    }
}