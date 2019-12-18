require 'rails_helper'

RSpec.describe "Reports" do
  describe "GET /reports" do
    it "Carga correctamente la funcion info en el cotnrolador reports" do
      expect(get: "/reports/info").to route_to(controller: "reports", action: "info")
    end
  end
end
