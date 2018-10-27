module Api
  class DepartmentsController < ApplicationController

    def index
      departments = Department.all.group_by do |dept|
        Department::FormatSchool[dept.school]
      end
      render json: departments
    end

  end
end
