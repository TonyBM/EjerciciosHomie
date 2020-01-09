class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    pages = params[:page]
    per_page = params[:per_page]
    @articles = Article.paginate(page: pages,per_page: per_page)
    @number_articles = Article.all.count
    @answer = {page: @articles, number: @number_articles}
    #render json: @articles
    render json: @answer
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end
  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      render json: @article, status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end
  
  private
    def article_params
      params.require(:article).permit(:title, :content)
    end
end
