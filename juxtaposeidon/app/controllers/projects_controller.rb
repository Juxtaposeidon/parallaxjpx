class ProjectsController < ApplicationController

  def show
    loadpartial = params[:key].split(" ").join("").downcase
    p loadpartial
    render :json => {:partial => render_to_string(:partial => "projects/#{loadpartial}")}
  end

end
