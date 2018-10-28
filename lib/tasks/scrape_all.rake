desc 'Scrape all data'
task scrape_all: :environment do
  scraper = Scraper.new
  scraper.scrape_departments
  depts = Department.all
  yrterm = 20192
  depts.each_with_index do |dept, idx|
    # TODO: remove me. This addresses a network error while deploying for dandyhack
    next if idx < 107

    puts "#{idx+1}. Scraping #{dept.short}..."
    scraper.scrape_dept_courses(dept, yrterm)
  end
end
