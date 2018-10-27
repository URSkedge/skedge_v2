module Api
  class SearchController < ApplicationController

    def index
      query = params[:q].strip.downcase
      cookies[:last_query] = query
      # case @query.downcase
      # when ""
      #   redirect_to :root
      # when "registrar", "registrer", "registration", "register"
      #   ahoy.track "$fast", {location:"registrar"}
      #   redirect_to "https://webreg.its.rochester.edu/prod/web/RchRegDefault.jsp"
      # when "cdcs"
      #   ahoy.track "$fast", {location:"cdcs"}
      #   redirect_to "https://cdcs.ur.rochester.edu/"
      # when "bookmarks"
      #   ahoy.track "$bookmarks"
      #   if !current_user || current_user.bookmarked_courses.empty?
      #     @search_error = "You haven't bookmarked any courses yet!"
      #   else
      #     @course_groups = {group: current_user.bookmarked_courses}
      #     @bookmarks = true
      #   end
      #   render 'results'
      # else
      begin
        sk_query = Course.sk_query(query)
        # binding.pry
        @course_groups = sk_query.group_by(&:yr_term)
        if @course_groups.any? and !@course_groups[20192] and !sk_query.where_values_hash["term"]
          @course_groups[20192] = {groupName: "Spring 2019", text: "No courses found for Spring 2019."}
        end
      rescue Course::QueryingException => e
        @search_error = e.message
      end

      render json: {
        courseGroups: CourseGroupSerializer.new(@course_groups).process,
        searchError: @search_error
      }
    end

  end
end
