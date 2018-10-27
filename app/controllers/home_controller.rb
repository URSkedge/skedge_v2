class HomeController < ApplicationController

  def index
    gon.last_query = cookies[:last_query]
  end

end
