using E_CommerceShop.Reviews.Dtos;
using E_CommerceShop.Reviews.IServices;
using E_Shop.Reviews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Account;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Users;

namespace E_CommerceShop.Reviews
{
    public class ReviewAppService : CrudAppService
        <
        Review, ReviewDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateReviewDto
        >, IReviewAppService 
    {
        private readonly IRepository<Review,Guid> _reviewRepository;
        private readonly ICurrentUser _currentUser;
        public ReviewAppService(IRepository<Review, Guid> repository,ICurrentUser currentUser) : base(repository)
        {
            _reviewRepository = repository;
            _currentUser = currentUser;
        }

        public override async Task<ReviewDto> CreateAsync(CreateUpdateReviewDto input)
        {
            ReviewDto reviewDto = new ReviewDto();
            reviewDto.ProductId = input.ProductId;
            reviewDto.ParentId = input.ParentId;
            reviewDto.Title = input.Title;
            reviewDto.CreatedAt = DateTime.Now;
            reviewDto.PublishedAt = DateTime.Now;
            reviewDto.Content = input.Content;
            reviewDto.UserId = (Guid)_currentUser.Id;
            reviewDto.SortId = null;

            ObjectMapper.Map<ReviewDto, Review>(reviewDto);
            return reviewDto;   
        }
    }
}
