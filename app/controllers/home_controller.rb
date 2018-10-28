class HomeController < ApplicationController

  def index
    gon.last_query = cookies[:last_query]
    gon.host_url = Rails.env.development? ?
      'http://localhost:3000' :
      'https://skedgev2.herokuapp.com'
  end

end
