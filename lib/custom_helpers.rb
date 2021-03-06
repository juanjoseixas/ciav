# encoding: utf-8

module CustomHelpers
  # -- Render --
  def draw_page_title
    ['site.title', ("layout.#{data.page.title}" if data.page.title)].reject(&:blank?).map{ |element| I18n.t(element) }.join(': ')
  end

  def typekit_include_tag apikey
    javascript_include_tag("http://use.typekit.com/#{apikey}.js") +
    javascript_include_tag("typekit.js")
  end

  def draw_page_nav
    markup = []

    available_pages.each do |page|
      markup << content_tag(:li, link_to(I18n.t("menu.#{page}"), page_path(page), :class => ['', page_status(page)].join(' ')))
    end

    markup.join(' ')
  end

  def draw_locale_select
    markup = []

    available_locales.each do |locale|
      target = '/'
      target << locale.to_s unless default_locale?(locale)

      if active_locale? locale
        markup << content_tag(:li, I18n.t("locale.#{locale}"), :class => 'active')
      else
        markup << content_tag(:li, link_to(I18n.t("locale.#{locale}"), target))
      end
    end

    markup.join(' ')
  end


  # -- Paths --
  def locale_base_path
    path = [nil]

    path << I18n.locale unless default_locale?(I18n.locale)

    path
  end

  def page_path page
    [locale_base_path, I18n.t("paths.#{page}")].join('/')
  end

  def home_path
    [locale_base_path, I18n.t("paths.index")+".html"].join('/')
  end

  def legal_path
    page_path 'legal'
  end

  def info_path
    page_path 'info'
  end

  # -- Locale --
  def locale_status locale
    active_locale?(locale) ? 'active' : 'inactive'
  end

  def active_locale? locale
    I18n.locale === locale
  end

  def default_locale? locale
    default_locale === locale
  end

  def available_locales
    [:en, :es, :fr, :pt, :de, :it, :gl,]
  end

  def default_locale
    :es
  end

  # -- Page --
  def page_status page
    active_page?(page) || data.page.title == page ? 'active' : 'inactive'
  end

  def active_page? page
    File.basename(current_page.path, current_page.ext) === page
  end

  def available_pages
    %w(about function building signatures time rome environment mythology)
  end
  
  # -- Markdown helper --
  def markdown(text)
    Tilt['markdown'].new { text }.render(scope=self)
  end
end
